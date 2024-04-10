import express from 'express';
// const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const quotes = {
	inspirational: [
		'The best way to predict the future is to invent it. – Alan Kay',
		'Life is 10% what happens to us and 90% how we react to it. – Charles R. Swindoll',
	],
	motivational: [
		'Do one thing every day that scares you. – Eleanor Roosevelt',
		'Your time is limited, don’t waste it living someone else’s life. – Steve Jobs',
	],
	funny: [
		'I am not a vegetarian because I love animals; I am a vegetarian because I hate plants. – A. Whitney Brown',
		'A day without sunshine is like, you know, night. – Steve Martin',
	],
};

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});

app.get('/quote', (req, res) => {
	// Store quote's keys in categories
	const categories = Object.keys(quotes);

	// Get a random index value for categories
	let randomCategoryIndex = Math.floor(Math.random() * categories.length);

	// Get a random category
	let categoryKey = categories[randomCategoryIndex];

	// Access the array value of quotes for this category
	let quoteArray = quotes[categoryKey];

	// Get a random index for the quote
	let randomQuoteIndex = Math.floor(Math.random() * quoteArray.length);

	// Select the random quote
	let randomQuote = quoteArray[randomQuoteIndex];

	let returnQuote = {
		quote: randomQuote,
	};

	// Send the random quote in the response
	res.status(200).json(returnQuote);
});

app.get('/quotes/:category', (req, res) => {
	if (quotes[req.params.category]) {
		res.status(200).json(quotes[req.params.category]);
	} else {
		res.status(404).json({
			error: 'Category not found',
		});
	}
});

app.post('/quotes', (req, res) => {
	const category = req.body.category;
	const quote = req.body.quote;

	if (quotes[category]) {
		quotes[category].push(quote);
		res.status(201).json({
			category: category,
			quote: quote,
		});
	} else {
		res.status(400).json({
			error: 'Category not found',
		});
	}
});

app.delete('/quotes/:category', (req, res) => {
	if (quotes[req.params.category]) {
		delete quotes[req.params.category];

		res.status(200).json({
			success: 'Category successfully deleted',
		});
	} else {
		res.status(404).json({
			error: 'Category not found',
		});
	}
});
