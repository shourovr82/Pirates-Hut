import React from 'react';

const MyProductItem = ({ product }) => {
  console.log(product);
  const { title, price, category, email } = product;
  return (
    <tr>

      <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        {title}
      </td>
      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
        {email}
      </td>
      <td class="whitespace-nowrap px-4 py-2 text-gray-700">${price}</td>
      <td class="whitespace-nowrap px-4 py-2">
        <strong
          class="rounded bg-amber-100 px-3 py-1.5 text-xs font-medium text-amber-700"
        >
          Partially Refunded
        </strong>
      </td>
    </tr>
  );
};

export default MyProductItem;