import { useState } from 'react';

function Company({ company, companies, setCompanies, contacts }) {
    const [isEditing, setIsEditing] = useState(false);
    const [companyName, setCompanyName] = useState(company.company_name);
    const [companyAddress, setCompanyAddress] = useState(company.company_address);
    const [contactId, setContactId] = useState(company.contact_id);

    // Function to handle deletion of a company
    async function deleteCompany() {
        const response = await fetch(`http://localhost/api/companies/${company.company_id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            setCompanies(companies.filter((c) => c.company_id !== company.company_id));
        } else {
            console.error('Failed to delete the company');
        }
    }

    // Function to handle updating a company
    async function updateCompany(e) {
        e.preventDefault();

        const response = await fetch(`http://localhost/api/companies/${company.company_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                company_name: companyName,
                company_address: companyAddress,
                contact_id: contactId,
            }),
        });

        if (response.ok) {
            setCompanies(companies.map((c) => 
                c.company_id === company.company_id ? { ...c, company_name: companyName, company_address: companyAddress, contact_id: contactId } : c
            ));
            setIsEditing(false);
        } else {
            console.error('Failed to update the company');
        }
    }

    return (
        <>
            {isEditing ? (
                <>
                    <form onSubmit={updateCompany} style={{ display: 'inline' }}>
                        <input
                            type='text'
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                        />
                        <input
                            type='text'
                            value={companyAddress}
                            onChange={(e) => setCompanyAddress(e.target.value)}
                        />
                        <input
                            type='text'
                            value={contactId}
                            onChange={(e) => setContactId(e.target.value)}
                        />
                        <button className='button green' type='submit'>Save</button>
                        <button className='button gray' onClick={() => setIsEditing(false)}>Cancel</button>
                    </form>
                </>
            ) : (
                <>
                    <button  onClick={() => setIsEditing(true)}>Edit</button>
                    <button className='button red' onClick={deleteCompany}>Delete</button>
                </>
            )}
        </>
    );
}

export default Company;
