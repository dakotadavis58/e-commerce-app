import React from "react";
class Customers extends React.Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      {
        id: 1,
        name: "Larry",
        phone: "123-456",
        address: { city: "London" },
        photo: "https://picsum.photos/id/1015/60",
      },
      {
        id: 2,
        name: "Becca",
        phone: "657-457",
        address: { city: "New Delhi" },
        photo: "https://picsum.photos/id/1014/60",
      },
      {
        id: 3,
        name: "Nick",
        phone: null,
        address: { city: "Amsterdam" },
        photo: "https://picsum.photos/id/1013/60",
      },

      {
        id: 4,
        name: "Shelly",
        phone: "870-456",
        address: { city: "New York" },
        photo: "https://picsum.photos/id/1012/60",
      },
      {
        id: 5,
        name: "Henry",
        phone: null,
        address: { city: "Boston" },
        photo: "https://picsum.photos/id/1011/60",
      },
    ],
  };

  onRefreshClick = () => {
    console.log("refresh clicked");
    this.setState({ customersCount: 0 });
  };

  getPhoneToRender(cust) {
    if (cust.phone) {
      return cust.phone;
    } else {
      return <div className="bg-warning p-2 text-center">Unavailable</div>;
    }
  }

  onChandlePictureClick = (cust, index) => {
    console.log(cust, index);
  };

  getCustomerRows = () => {
    return this.state.customers.map((cust, index) => {
      return (
        <tr key={cust.id}>
          <td>{cust.id}</td>
          <td className="">
            <img className="ms-4" alt="fake customer pic" src={cust.photo} />
            <div>
              <button
                className="btn btn-sm btn-secondary m-2"
                onClick={() => this.onChandlePictureClick(cust, index)}
              >
                Change picture
              </button>
            </div>
          </td>
          <td>{cust.name}</td>
          <td>{this.getPhoneToRender(cust)}</td>
          <td>{cust.address.city}</td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div>
        <h4 className="m-1 p-1">
          {this.state.pageTitle}
          <span className="badge bg-secondary m-2">
            {this.state.customersCount}
          </span>
          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4>
        <table className="table">
          <thead>
            <tr className="">
              <th>#</th>
              <th>Picture</th>
              <th>Customer Name</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>{this.getCustomerRows()}</tbody>
        </table>
      </div>
    );
  }
}

export default Customers;
