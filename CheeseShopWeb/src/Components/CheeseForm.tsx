import React from "react";
import { useState, FormEvent } from 'react';
import Cheese from '../Types/Cheese';
import config from '../config';

type CheeseFormProps = {
     onCheeseAdded: () => void;
};

function CheeseForm({onCheeseAdded} : CheeseFormProps) {
    const [cheese, setCheese] = useState<Cheese>({
        id: 0,
        name: '',
        pricePerKilo: '',
        colour: '',
        photo: ''
    });

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        try {
            const response = await fetch(`${config.baseApiUrl}/Cheese`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(cheese),
            });

            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }

            const result = await response.json();
            console.log('Success:', result);

            // Reset form
            setCheese({
                id: 0,
                name: '',
                pricePerKilo: '',
                colour: '',
                photo: ''
            });

            onCheeseAdded();

        } catch (error) {
            console.error('Error:', error);
        }
        console.log(cheese);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h3>Add Cheese</h3>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    value={cheese.name}
                    onChange={(e) =>
                        setCheese({ ...cheese, name: e.target.value })
                    }
                    required
                />
            </div>
            <div>
                <label htmlFor="pricePerKilo">Price per Kilo:</label>
                <input
                    type="number"
                    value={cheese.pricePerKilo}
                    onChange={(e) =>
                        setCheese({ ...cheese, pricePerKilo: e.target.value })
                    }
                    required
                />
            </div>
            <div>
                <label htmlFor="colour">Colour:</label>
                <input
                    type="text"
                    value={cheese.colour}
                    onChange={(e) =>
                        setCheese({ ...cheese, colour: e.target.value })
                    }
                    required
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default CheeseForm;