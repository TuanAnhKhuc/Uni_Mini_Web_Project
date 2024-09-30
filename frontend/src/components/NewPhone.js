import { useState } from 'react';

function NewPhone(props) {
    const {contact, phones, setPhones} = props;
    const [phone_number, setPhoneNumber] = useState('');
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');

    async function createPhone(e) {
        e.preventDefault();

        const response = await fetch('http://localhost/api/contacts/' + contact.id + '/phones', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                phone_number,
                phone_type: category
            })
        });

        const data = await response.json();

        if (data.id) {
            setPhones([...phones, data]);
        }

        setPhoneNumber('');
        setCategory('');
    }

	return (
        <form onSubmit={createPhone} onClick={(e) => e.stopPropagation()} className='new-phone'>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="" disabled>Select Category</option>
                <option value="Mobile" >Mobile</option>
                <option value="Home" >Home</option>
                <option value="Work" >Work</option>
                <option value="Other">Other</option>
            </select>
            <input type='text' placeholder='Phone Number' onChange={(e) => setPhoneNumber(e.target.value)} value={phone_number}/>
            <button className='button green' type='submit'>Add {props.contact.name}'s phone </button>
        </form>
	);
}

export default NewPhone;