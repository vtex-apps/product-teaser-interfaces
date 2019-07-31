import React, { FunctionComponent } from 'react'
import { FormattedMessage } from 'react-intl'
import { useProductSummary } from 'vtex.product-summary-context/ProductSummaryContext'

const RatingInline: FunctionComponent = () => {
  const { product } = useProductSummary()

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

export default RatingInline
