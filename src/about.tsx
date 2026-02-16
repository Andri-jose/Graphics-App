import React from 'react';
import { useNavigate } from 'react-router';
import graph from './assets/about.png';

export default function About() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen">
            <div className="mx-auto max-w-2xl text-center mt-5">
                <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 
                sm:text-5xl">
                    About Us
                </h2>
            </div>
            <div className="max-w-6xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="flex justify-center">
                        <img src={graph} alt="About Us" className="rounded-lg shadow-lg w-80 h-80 object-cover" />
                    </div>
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-gray-900">
                            Statistical Solutions For Your Business
                        </h3>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis rem sapiente 
                            dolor quam dolorum quibusdam nobis, quisquam quaerat qui adipisci id a. Dolore quas
                             quod voluptatibus esse sequi quis recusandae. Autem, dolorum quo quasi. Facere 
                             corrupti quibusdam recusandae porro aliquam.
                        </p>
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <h3 className="font-bold text-blue-900">100+</h3>
                                <p className="text-gray-600">Completed Projects</p>
                            </div>
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <h3 className="font-bold text-blue-900">50+</h3>
                                <p className="text-gray-600">Happy Clients</p>
                            </div>
                        </div>
                        <button className="mt-6 bg-sky-600 text-white px-8 py-3 rounded-lg font-semibold 
                        hover:bg-blue-700 transition cursor-pointer"
                        onClick={() => {
                          navigate('/contact');
                        }}>
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}


