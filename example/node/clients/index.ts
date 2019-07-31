import { IOClients } from '@vtex/api'

import ProductReview from './productReview'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  public get status() {
    return this.getOrSet('productReview', ProductReview)
  }
}