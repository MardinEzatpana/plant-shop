import { useRouter } from 'next/router';
import { useState } from 'react';
import { useMutation } from 'react-query';
import { fetchJson } from '../lib/api';

const AddToCart = ({ productId }) => {
    const router = useRouter();
    const [quantity, setQuantity] = useState(1);
    const mutation = useMutation(() =>
      fetchJson('/api/cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId, quantity })
      }));
  
    const handleClick = async () => {
      await mutation.mutateAsync();
      router.push('/cart');
    };
  
    return (
      <div className="py-2">
        <input type="number" min="1"
          className="border rounded px-3 py-1 mr-2 w-16 text-right"
          value={quantity.toString()}
          onChange={(event) => setQuantity(parseInt(event.target.value))}
        />
        {mutation.isLoading ? (
          <p>Loading...</p>
        ) : (
          <button onClick={handleClick}
          className="bg-green-800 block text-gray-100 rounded px-4 py-2 my-4
      hover:bg-green-700"
        >
          Add to cart
        </button>
        )}
      </div>
    );
  }

export default AddToCart