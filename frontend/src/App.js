import { useState, useEffect } from 'react';  // import useEffect
import ContactList from './components/ContactList';
import CompanyList from './components/CompanyList';
import Stats from './components/Stats';
import './App.css';

function App() {
    const [contacts, setContacts] = useState([]);
    const [companies, setCompanies] = useState([]); // Add state for companies

    useEffect(() => {
        // Fetch contacts
        fetch('http://localhost/api/contacts')
            .then(response => response.json())
            .then(data => setContacts(data))
            .catch((error) => {
                console.error('Error fetching contacts:', error);
            });
        
        // Fetch companies
        fetch('http://localhost/api/companies')
            .then(response => response.json())
            .then(data => setCompanies(data))
            .catch((error) => {
                console.error('Error fetching companies:', error);
            });
    }, []);

    return (
        <div className='page'>
            <h1>Contactor</h1>
            <ContactList contacts={contacts} setContacts={setContacts} />
            <p>Click a contact to view associated phone numbers</p>

            <h2>Company</h2>
            <CompanyList companies={companies} setCompanies={setCompanies} contacts={contacts} /> {/* Pass contacts */}

            
            <Stats />
        </div>
    );
}

export default App;
