import React, { useState } from 'react'
import {Button} from 'reactstrap';

function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement('script')
		script.src = src
		script.onload = () => {
			resolve(true)
		}
		script.onerror = () => {
			resolve(false)
		}
		document.body.appendChild(script)
	})
}


function PayApp(props) {
	const [name, setName] = useState('Mehul')

	async function displayRazorpay() {
		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?')
			return
		}

		 fetch('https://aichemist-server.herokuapp.com/razorpay', { method: 'POST' })
		 .then((t) =>t.json())
		 .then(function(data) {
		 	const options = {
			key: 'rzp_test_35znAIY1z9fBwX',
			currency: data.currency,
			amount: "60000",
			order_id: data.id,
			name: 'Order Payment',
			description: 'AI-Chemist is always at your service. Please proceed with your order',
			image:'https://aichemist-server.herokuapp.com/images/logo.png',
			handler: function (response) {
				alert(response.razorpay_payment_id)
				alert(response.razorpay_order_id)
				alert(response.razorpay_signature)
			},
			prefill: {
				name: props.auth.user.username,
				email: `${props.auth.user.username}@aichemist.com`,
				phone_number: ' '
			}
			}
			const paymentObject = new window.Razorpay(options)
			paymentObject.open()
		 	
		 })

		
	}

	return (
		<div >
		<Button color="primary" onClick={displayRazorpay} rel="noopener noreferrer" target="_blank">Pay</Button>
		</div>
	)
}

export default PayApp
