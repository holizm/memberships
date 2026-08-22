import {
    DateTime,
    List,
    Text,
} from 'list'
import Form from './form'

const headers = <>
    <th start>membershipsNumber</th>
    <th>membershipsApplicant</th>
    <th>membershipsMembershipType</th>
    <th>membershipsApplicationDate</th>
    <th>membershipsStatus</th>
</>

const row = item => <>
    <td>{item.number}</td>
    <td>{item.applicant?.title}</td>
    <td>{item.membershipType?.title}</td>
    <DateTime value={item.applicationDate} />
    <td>{item.membershipApplicationStatus}</td>
</>

export default <List
    create={Form}
    filters={<Text property='number' />}
    hasDelete
    hasEdit
    headers={headers}
    row={row}
/>
