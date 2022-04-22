import React from 'react';
import { books } from '../data'
import Book from "./ui/Book"

const Discounted = () => {
    return (
        <section id="recent">
            <div className="container">
                <div className="row">
                    <h2 className="section__title"> 
                       Discount <span className='purple'>Books</span> 
                    </h2>
                    <div className='books'>
                        {books
                            .filter(book => book.salePrice > 0) //Filtering the element, If it has a sale price, then continue down. 
                            .slice(0,8) //Then take the first 8 elements from the array
                            .map((book) => (    // then map over each element in the array
                            <Book book={book} key={book.id} /> //And then turn each elements into this html tag.  
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Discounted;
