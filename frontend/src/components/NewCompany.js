import { useState } from 'react';

function NewCompany({ companies, setCompanies }) {
    const [companyName, setCompanyName] = useState('');
    const [companyAddress, setCompanyAddress] = useState('');
    const [contactId, setContactId] = useState('');

    // Function to handle adding a new company
    async function createCompany(e) {
        e.preventDefault();

        const response = await fetch('http://localhost/api/companies', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                company_name: companyName,
                company_address: companyAddress,
                contact_id: contactId,
            }),
        });

        const data = await response.json();

        if (data.company_id) {
            setCompanies([...companies, data]);
        }

        // Clear input fields after submission
        setCompanyName('');
        setCompanyAddress('');
        setContactId('');
    }

    return (
        <form onSubmit={createCompany} className='new-company'>
            <input
                type='text'
                placeholder='Company Name'
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required
            />
            <input
                type='text'
                placeholder='Company Address'
                value={companyAddress}
                onChange={(e) => setCompanyAddress(e.target.value)}
                required
            />
            <input
                type='text'
                placeholder='Contact ID'
                value={contactId}
                onChange={(e) => setContactId(e.target.value)}
                required
            />
            <button className='button green ' type='submit'>Add Company</button>
        </form>
    );
}

export default NewCompany;
