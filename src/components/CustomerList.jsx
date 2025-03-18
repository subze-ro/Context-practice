import React, { useState } from "react";
import { useCustomer } from "../contexts/CustomerContext";

const CustomerList = () => {
  const { customers, updateCustomer, deleteCustomer } = useCustomer();
  const [editingId, setEditingId] = useState(null);
  const [editedCustomer, setEditedCustomer] = useState({});

  const handleEditClick = (customer) => {
    setEditingId(customer.id);
    setEditedCustomer(customer);
  };

  const handleSaveClick = () => {
    updateCustomer(editingId, editedCustomer);
    setEditingId(null);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-purple-800 mb-4">Customer List</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left">Profile Picture</th>
            <th className="text-left">Name</th>
            <th className="text-left">Email</th>
            <th className="text-left">Phone</th>
            <th className="text-left">Type</th>
            <th className="text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id} className="border-t">
              <td className="py-2">
                {customer.profilePicture && (
                  <img
                    src={customer.profilePicture}
                    alt="Profile"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                )}
              </td>
              <td className="py-2">
                {editingId === customer.id ? (
                  <input
                    type="text"
                    value={editedCustomer.fullName}
                    onChange={(e) =>
                      setEditedCustomer({ ...editedCustomer, fullName: e.target.value })
                    }
                    className="border rounded p-1"
                  />
                ) : (
                  customer.fullName
                )}
              </td>
              <td className="py-2">
                {editingId === customer.id ? (
                  <input
                    type="text"
                    value={editedCustomer.email}
                    onChange={(e) =>
                      setEditedCustomer({ ...editedCustomer, email: e.target.value })
                    }
                    className="border rounded p-1"
                  />
                ) : (
                  customer.email
                )}
              </td>
              <td className="py-2">{customer.phoneNumber}</td>
              <td className="py-2">{customer.customerType}</td>
              <td className="py-2">
                {editingId === customer.id ? (
                  <button onClick={handleSaveClick} className="bg-green-600 text-white p-1 rounded">Save</button>
                ) : (
                  <button onClick={() => handleEditClick(customer)} className="bg-blue-600 text-white p-1 rounded font-thin text-sm">Edit</button>
                )}
                <button
                  onClick={() => deleteCustomer(customer.id)}
                  className="bg-red-600 font-thin text-white p-1 text-sm rounded ml-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerList;
