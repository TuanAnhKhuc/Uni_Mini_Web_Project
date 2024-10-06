import Company from './Company';
import NewCompany from './NewCompany';

function CompanyList({ companies, setCompanies, contacts }) {
    // Helper function to get contact name using contact_id
    const getContactName = (contactId) => {
        const contact = contacts.find((c) => c.id === contactId);
        return contact ? contact.name : 'Unknown';
    };

    return (
        <div className='company-list'>
            <h2>Companies</h2>
            <NewCompany companies={companies} setCompanies={setCompanies} />

            <hr />

            <table>
                <thead>
                    <tr>
                        <th>Company Name</th>
                        <th>Company Address</th>
                        <th>Contact Name</th> {/* Display contact name */}
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {companies.map((company) => (
                        <tr key={company.company_id}>
                            <td>{company.company_name}</td>
                            <td>{company.company_address}</td>
                            <td>{getContactName(company.contact_id)}</td>
                            <td>
                                {/* Use the Company component only for action buttons */}
                                <Company company={company} companies={companies} setCompanies={setCompanies} contacts={contacts} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CompanyList;

