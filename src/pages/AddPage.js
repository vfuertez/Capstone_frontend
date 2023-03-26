import {Form} from 'react-router-dom'

function AddPage(props) {
    return(
        <>
        <Form action="/create" method="post">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              autocomplete="off"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              autocomplete="off"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              autocomplete="off"
            />
            <input
              type="text"
              name="phone_number"
              placeholder="Phone"
              autocomplete="off"
            />
            <input type="url" name="url" placeholder="URL" autocomplete="off" />
            <br></br>
            <button class="bg-blue-400">Add</button>
          </div>
        </Form>
        </>
    )
}

export default AddPage