import { ClientsConfig, LRUCache, Service, IOClients, ServiceContext } from '@vtex/api'
import { Clients } from './clients'

import settingsResolver from './resolvers/settings'

const TIMEOUT_MS = 800

// Create a LRU memory cache for the Product Review client.
// The @vtex/api HttpClient respects Cache-Control headers and uses the provided cache.
const memoryCache = new LRUCache<string, any>({max: 5000})
metrics.trackCache('productReview', memoryCache)

// This is the configuration for clients available in `ctx.clients`.
const clients: ClientsConfig<Clients> = {
  // We pass our custom implementation of the clients bag, containing the Status client.
  implementation: Clients,
  options: {
    // All IO Clients will be initialized with these options, unless otherwise specified.
    default: {
      retries: 2,
      timeout: TIMEOUT_MS,
    },
    // This key will be merged with the default options and add this cache to our Status client.
    status: {
      memoryCache,
    },
  },
}

declare global {
  // We declare a global Context type just to avoid re-writing ServiceContext<Clients> in every handler and resolver
  type Context = ServiceContext<Clients>
}

// Export a service that defines route handlers and client options.
export default new Service<IOClients>({
  clients,
  graphql: {
    resolvers: {
      Query: {
        appSettings: settingsResolver,
      }
    },
  },
})