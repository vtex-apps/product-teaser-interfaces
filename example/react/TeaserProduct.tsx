import React, { FunctionComponent } from 'react'
import { FormattedMessage } from 'react-intl'
import useProduct from 'vtex.product-context/useProduct'

const TeaserProduct: FunctionComponent = () => {
  const { product } = useProduct()

  if (!product) {
    return null
  }

  return (
    <div>
      <FormattedMessage
        id="teaser"
        values={{
          name: product.productName,
        }}
      />
    </div>
  )
}

export default TeaserProduct
