import {
    DateTime,
    List,
    Text,
} from 'list'
import Form from './form'

const headers = <>
    <th start>membershipsMemberNumber</th>
    <th>membershipsMember</th>
    <th>membershipsMembershipType</th>
    <th>membershipsEndDate</th>
    <th>membershipsStatus</th>
</>

const row = item => <>
    <td>{item.memberNumber}</td>
    <td>{item.member?.title}</td>
    <td>{item.membershipType?.title}</td>
    <DateTime value={item.endDate} />
    <td>{item.membershipStatus}</td>
</>

export default <List
    create={Form}
    filters={<Text property='memberNumber' />}
    hasDelete
    hasEdit
    headers={headers}
    row={row}
/>
