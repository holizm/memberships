import {
    List,
    Title,
} from 'list'
import Form from './form'

const headers = <>
    <th start>membershipsMembershipType</th>
    <th>membershipsCode</th>
    <th>membershipsDurationDays</th>
    <th>membershipsFee</th>
</>

const row = item => <>
    <td>{item.title}</td>
    <td>{item.code}</td>
    <td>{item.durationDays}</td>
    <td>{item.fee}</td>
</>

export default <List
    create={Form}
    filters={<Title />}
    hasDelete
    hasEdit
    headers={headers}
    row={row}
/>
