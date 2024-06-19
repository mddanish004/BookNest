import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useFirebase } from '../context/Firebase';

const ListingPage = () => {
    const firebase = useFirebase();

    const [name, setName] = useState("");
    const [isbn, setIsbn] = useState("");
    const [image, setImage] = useState(null);
    const [price, setPrice] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await firebase.handleCreateNewListing(name, isbn, image, price);
    }

    return (
        <div className="container mt-5">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBookName">
                    <Form.Label>Enter book name</Form.Label>
                    <Form.Control
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        type="text"
                        placeholder="Book name"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formISBN">
                    <Form.Label>ISBN</Form.Label>
                    <Form.Control
                        onChange={(e) => setIsbn(e.target.value)}
                        value={isbn}
                        type="text"
                        placeholder="ISBN"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPrice">
                    <Form.Label>Enter Price</Form.Label>
                    <Form.Control
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                        type="text"
                        placeholder="Price"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formImage">
                    <Form.Label>Cover image</Form.Label>
                    <Form.Control
                        onChange={(e) => setImage(e.target.files[0])}
                        type="file"
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Create
                </Button>
            </Form>
        </div>
    )
};

export default ListingPage;
