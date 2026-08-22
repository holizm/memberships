import {
    DateTime,
    DialogForm,
    Select,
    Text,
} from 'form'

const inputs = <>
    <Text
        placeholder='membershipsMemberNumber'
        property='memberNumber'
        required
    />
    <Text
        placeholder='membershipsMember'
        property='member'
        required
    />
    <Text
        placeholder='membershipsMembershipType'
        property='membershipType'
        required
    />
    <DateTime
        placeholder='membershipsStartDate'
        property='startDate'
        required
    />
    <DateTime
        placeholder='membershipsEndDate'
        property='endDate'
    />
    <Select
        options={[
            'pending',
            'active',
            'suspended',
            'expired',
            'cancelled',
        ]}
        placeholder='membershipsStatus'
        property='membershipStatus'
        required
    />
</>

export default <DialogForm inputs={inputs} />
