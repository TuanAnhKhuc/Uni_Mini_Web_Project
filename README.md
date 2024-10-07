Tuan Anh Github repo link: https://github.com/TuanAnhKhuc/A2-Tuan-Anh-21794174.git
<details>
<summary>Task 1: User Interface changes </summary>
  
Original UI:
  
<img width="540" alt="Original Contact web UI  2" src="https://github.com/user-attachments/assets/572f599c-7673-4664-92d9-b32046d275cb">

1. Changinng the button label of Contact component can easily be done by changing the existing text of the button from "Delete" to "Delete Contact" 

![Task1 1](https://github.com/user-attachments/assets/d77e0d68-41ff-49dd-a45d-126971f5159d)

3. Using <select></select> can help us create a drop-down menu for different categories of phones 

![Task 1 2](https://github.com/user-attachments/assets/6d932002-e3a3-40ab-a982-05da938b8110)

2. The "Add" button can be changed using {props.contact.name} so that you can pass the newly added contact name into the text of the button; we also changed the label of the button with the ending " 's phone ".

![Task 1 2 Button](https://github.com/user-attachments/assets/74e52ea2-3a88-40a0-a0ae-21c5e365f53a)

4. The name of the PhoneList table can easily be changed from "Name" to "Phone Type" by altering the element in the <tr></tr> 

![Task 1 3](https://github.com/user-attachments/assets/f03cf686-50bf-4127-a910-8d1eeb0c8624)

Task 1 UI changes:

<img width="484" alt="Tasask 1 UI changes" src="https://github.com/user-attachments/assets/7bbbd896-d6fe-4c0e-b82c-df4b701775b7">

</details>

<details>
  <summary>Task 2: API Commands and Screenshots</summary>
1.Show Contact
  
  <img width="967" alt="Task 2 1 2" src="https://github.com/user-attachments/assets/07edf718-2348-4de0-a759-33a9a1c5f9d4">
  
2. Add Contact

  <img width="968" alt="Task 2 2 2" src="https://github.com/user-attachments/assets/ea7b6358-cc3a-4692-8622-ead9b236ce00">

3. Delete Contact
   
  <img width="968" alt="Task 2 3 2" src="https://github.com/user-attachments/assets/9bcc1498-6373-4a7e-b24c-f8fab17ca823">
 
4. Update Contact

 <img width="970" alt="Task 2 4 2" src="https://github.com/user-attachments/assets/119c6153-1b18-427f-8808-19d773d4ee89">

5.Show Phone
   
<img width="959" alt="Task 2 5 2" src="https://github.com/user-attachments/assets/ebebe615-3d12-41ca-adc9-de7843053912">

6. Add Phone
   
  <img width="969" alt="Task 2 6 2" src="https://github.com/user-attachments/assets/ac9f04d0-fb84-4bcd-9e5e-0834896a5cdd">
  
7. Delete Phone
   
  <img width="964" alt="Task 2 7 2" src="https://github.com/user-attachments/assets/c4f4245d-047b-4f82-a855-11fab141ca24">

8. Update Phone

<img width="975" alt="Task 2 8 2" src="https://github.com/user-attachments/assets/5f23b9a2-53b1-420f-8a03-699f5364c87b">

</details>

<details>
  <summary>Task 3: Data model changes & UI alterations. </summary>
UI changes:

<img width="461" alt="Task 3 UI" src="https://github.com/user-attachments/assets/675dbac6-0ddf-4321-8be7-0ded719e1147">

Added an "Address" field to the "Contacts" form for creating a contact.

Updated UI to display the address in the contact list.

Code changes:

Added the "address" attribute to the Contacts.model.js.

![Task 3 Contact address attri](https://github.com/user-attachments/assets/deffbc2e-db40-4e5c-84ab-e9254c6619d3)

Renamed the "name" and "number" attributes to "phone_type" and "phone_number" respectively in Phones.model.js.

![Task 3 Phone atri](https://github.com/user-attachments/assets/d3985eb6-6a33-4127-b2d1-f1ddba165fb3)

Changed sequelize.sync from { force: false } to { force: true } to reflect model changes in the database.

![Task 3 model changes](https://github.com/user-attachments/assets/57c7b1ed-a532-4686-b411-cc862f78c336)

Updated the contacts controller to handle the new "address" attribute.
Modified the phones controller to reference phone_type and phone_number instead of name and number.

![Task 3 phone controller](https://github.com/user-attachments/assets/8a832a41-3478-4e06-80cf-bd678c3aeccc)

![Task 3 Contact controller](https://github.com/user-attachments/assets/736766db-85d1-4c2e-98d5-f9d71b6ad012)

After the changes we made to the table models, we have to make sure that the variables in the frontend reflectes these changes as well to that it can pass the data.

Added a new state variable for address using useState.

Modified the form to include an input field for the address, with its onChange event handler linked to setAddress.

![Task 3 new contact frontend](https://github.com/user-attachments/assets/3948ae3a-a814-459b-a69b-1a23b528c3e7)

Modified the component rendering the contact list to display the address field.

![Task 3 contact frontend](https://github.com/user-attachments/assets/d72d8904-f433-4338-9b3d-b7b685111950)

Changed state management for phone details to use phone_type and phone_number instead of name and number.

![Task 3 frontend Phone ](https://github.com/user-attachments/assets/1c749477-a089-453b-aa94-8862b846605a)

Updated the input field placeholder to "Phone Number" and the onChange event to use setPhoneNumber.

![Task 3 NewPhone frnt end part1](https://github.com/user-attachments/assets/f3c8d4f2-bd8b-488d-a0ba-99713bf7e396)

Adjusted the request payload to include phone_type and phone_number when adding a new phone.

![Task 3 frontend NewPhone part 3](https://github.com/user-attachments/assets/bc53929d-94f8-4b8c-bf00-b7e5526bff1f)

![Task 3 frontend NewPhone part 2](https://github.com/user-attachments/assets/31b7ed00-8113-498b-ad00-23c36aa5e352)

</details>

<details>
<summary> Task 3: API command </summary>

1. Show contact
   
![Show Contact](https://github.com/user-attachments/assets/d1bc2b13-cf24-4004-a5c6-06db9b398dbe)

2. Add contact
   
![Add Contact](https://github.com/user-attachments/assets/5c79cdfd-697a-4e95-89f8-5e6449d6f7ea)

3.Delete contact

![Delete Contact](https://github.com/user-attachments/assets/57b5ed51-5487-4ac3-abb7-9246face83e1)

4.Update contact

![Update contact](https://github.com/user-attachments/assets/59efc25f-ea56-4c2a-ab3d-dc4122c08b45)

5. Show phone

![Show phone](https://github.com/user-attachments/assets/10ec90be-b69c-4c99-9c69-e666220dd79a)

6. Add phone

![Add phone](https://github.com/user-attachments/assets/de6e2c94-3cf6-4b61-ba00-d4d9bc5429a2)

7. Delete phone

![Delete phone](https://github.com/user-attachments/assets/39334e62-9315-46ca-ab91-9654ac63a87a)

8. Update phone

![Update phone](https://github.com/user-attachments/assets/97eeff1a-135c-4b31-8e06-d2acf904a3dd)

</details>

<details>
  <summary> Task 4: Company table creation & API commands</summary>
Task 4: API Commands:
1. Create company:
  
![Task 4 Create company](https://github.com/user-attachments/assets/7c0e5e2a-5efa-4648-b972-6da6cf91c5cf)

2. Get company list:
   
![Task 4 get company](https://github.com/user-attachments/assets/2b7330de-dad6-41d2-b590-db69410fedc5)

3. Update company:
   
![Task 4 Update company](https://github.com/user-attachments/assets/fcfa6d48-1e1a-44ee-b5f3-27f0df2a40be)

4. Delete company:

![Task 4 Delete company](https://github.com/user-attachments/assets/7c3e49c1-40e0-4b01-9cac-39e818480bd6)

Task 4: Code changes ( Create a new file for "Company Controller")

## Company Controller

Create a Company: This endpoint creates a new company in the database using data provided in the request body.

Retrieve All Companies: This endpoint fetches all companies stored in the database.

Retrieve a Single Company by ID: This endpoint finds a specific company using the company ID from the request parameters.

Update a Company by ID: This endpoint updates the company’s details using the ID and new data from the request.

Delete a Company by ID: This endpoint deletes a company based on the ID provided in the request parameters.


### Code Overview

Below is the code for `company.controller.js` along with a brief explanation of each function.

```javascript
const db = require("../models");
const Company = db.company; // Import the Company model
const Contacts = db.contacts; // Import the Contacts model (not used in this file but left for context)
const Phones = db.phones; // Import the Phones model (not used in this file but left for context)
const Op = db.Sequelize.Op; // Sequelize operators for complex queries (not used in this file but left for context)

// **Create a Company**
// This function creates a new company record in the database using data provided in the request body.
exports.create = (req, res) => {
    const company = {
        company_name: req.body.company_name,
        company_address: req.body.company_address,
        contact_id: req.body.contact_id
    };

    Company.create(company)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the company."
            });
        });
};

// **Retrieve All Companies**
// This function retrieves all companies from the database.
exports.findAll = (req, res) => {
    Company.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving companies."
            });
        });
};

// **Retrieve a Single Company by ID**
// This function retrieves a company based on the company ID provided in the request parameters.
exports.findOne = (req, res) => {
    const id = req.params.companyId;

    Company.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Company with ID=${id} not found.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Company with ID=" + id
            });
        });
};

// **Update a Company by ID**
// This function updates a company's details using the company ID and new data provided in the request body.
exports.update = (req, res) => {
    const id = req.params.companyId;

    Company.update(req.body, {
        where: { company_id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Company was updated successfully."
            });
        } else {
            res.status(404).send({
                message: `Cannot update Company with ID=${id}. Maybe Company was not found or request body is empty.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Company with ID=" + id
        });
    });
};

// **Delete a Company by ID**
// This function deletes a company based on the company ID provided in the request parameters.
exports.delete = (req, res) => {
    const id = parseInt(req.params.companyId);

    Company.destroy({
        where: { company_id: id }
    })
    .then(num => {
        if (num === 1) {
            res.send({
                message: "Company was deleted successfully!"
            });
        } else {
            res.status(404).send({
                message: `Cannot delete Company with ID=${id}. It may not exist.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete Company with ID=" + id
        });
    });
};

```


Created a new Sequelize model for Company with fields:

company_id: Primary key, auto-incrementing integer.

company_name: String to store the name of the company.

company_address: String to store the company's address.

contact_id: Integer referencing the contact table.

![Task 4 Company table creation ](https://github.com/user-attachments/assets/dc6af835-2e68-4d90-8458-f9650395b6e0)

Imported the Company model in the main database file (db.company).

![Task 4 create sequelize databse ](https://github.com/user-attachments/assets/4837d13b-1751-4bbc-97fa-d2ba7c147de4)

Added routes for company operations:

POST /companies: Creates a new company.

GET /companies: Retrieves all companies.

GET /companies/:companyId: Retrieves a specific company by ID.

PUT /companies/:companyId: Updates a specific company.

DELETE /companies/:companyId: Deletes a specific company.

![Task 4 company API routes](https://github.com/user-attachments/assets/1439e0bb-2300-455b-a7da-d77efadd2361)

</details>

<details>
  <summary>Task 5: UI changes </summary>
  
  <img width="724" alt="Task 5 UI " src="https://github.com/user-attachments/assets/b9b0c7ef-8202-4b5c-8dc1-660ba335f6d3">

# Company Management Frontend

This section provides an overview of the React components used to manage company records. The components include:

1. **`Company` Component**: Handles the display, editing, and deletion of individual company records.
2. **`CompanyList` Component**: Displays a list of companies and includes an interface for adding new companies.
3. **`NewCompany` Component**: Provides a form to create a new company.

## Code Overview

### 1. `Company` Component

This component is responsible for displaying a company's details and providing functionalities to edit or delete the company. It uses React's `useState` hook to manage editing state and form values.

#### Code Snippet:
```javascript
  import { useState } from 'react'
  
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

```
### 2. `CompanyList` Component

The `CompanyList` component is responsible for displaying all companies in a table format. It also includes the `NewCompany` component to provide a form for adding new companies and utilizes the `Company` component for managing individual company actions (edit and delete).

#### Code Snippet:
```javascript
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

```

### 3. `NewCompany` Component

The `NewCompany` component provides a form to create a new company. It manages input states for company details and sends a `POST` request to the server when the form is submitted.

#### Code Snippet:
```javascript
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
```
## App Component

This section explains how the `CompanyList` component is integrated into the main application, alongside the existing contact management features.

### Integrating the `CompanyList` Component

First, import the `CompanyList` component at the top of the file:
```javascript
import CompanyList from './components/CompanyList';
```

Adding the Company Table to the Main Page:
 
```javascript

 <div className='page'>
            <h1>Contactor</h1>
            <ContactList contacts={contacts} setContacts={setContacts} />
            {/* <p>Click a contact to view associated phone numbers</p> */}

            {/* <h2>Company</h2>  */}
            <CompanyList companies={companies} setCompanies={setCompanies} contacts={contacts} /> {/* Pass contacts */}

            <p>Click a contact to view associated phone numbers</p> 

            <Stats />
   </div>
    );
```
### Adding styling to the Company component in App.css:

```javascript
/* Styling for the New Company Form */
.new-company {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr auto;
    gap: 10px;
    align-items: center;
    margin-bottom: 15px;
}

/* Adjust input fields and button width */
.new-company > input {
    padding: 8px;
    border: 1px solid #b1b1b1;
    border-radius: 4px;
    width: 100%; /* Make inputs responsive */
}

.new-company > button {
    padding: 8px 12px;
    font-size: 14px;
    border-radius: 4px;
    cursor: pointer;
}

/* Adjust table width to fit within the container */
.company-list > table {
    width: 100%; /* Make table take up the full width of the container */
}

.contact-list > table {
    width: 100%; /* Make contact table take up the full width of the container */
}

/* Optional: Adjust the heading styles */
.contact-list > h2, .company-list > h2 {
    text-align: center;
}
```

</details>




