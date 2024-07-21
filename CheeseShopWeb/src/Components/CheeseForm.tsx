import React from "react";
import { useState, FormEvent } from 'react';
import Cheese from '../Types/Cheese';
import addCheese from "../Api/addCheese";
import toBase64 from "../toBase64";

interface CheeseFormProps {
    onCheeseAdded: () => void;
}

function CheeseForm({ onCheeseAdded }: CheeseFormProps) {
    const [cheese, setCheese] = useState<Cheese>({
        id: 0,
        name: '',
        pricePerKilo: 0,
        colour: '',
        photo: ''
    });

    const resetForm = () => {
        setCheese({
            id: 0,
            name: '',
            pricePerKilo: 0,
            colour: '',
            photo: ''
        });
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        await addCheese(cheese);

        resetForm();

        onCheeseAdded();
    };

    const onFileSelected = async (
        e: React.ChangeEvent<HTMLInputElement>
    ): Promise<void> => {
        e.preventDefault();
        e.target.files &&
            e.target.files[0] &&
            setCheese({
                ...cheese,
                photo: await toBase64(e.target.files[0]),
            });
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
                        setCheese({ ...cheese, pricePerKilo: e.target.valueAsNumber })
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
            <div>
                <label htmlFor="image">Image</label>
                <input
                    type="file"
                    onChange={onFileSelected}
                    required
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default CheeseForm;