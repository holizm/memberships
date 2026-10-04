import {
    DateTime,
    DialogForm,
    Select,
    Text,
} from 'form'

const inputs = <>
    <Text
        placeholder='memberNumber'
        property='memberNumber'
        required
    />
    <Text
        placeholder='member'
        property='member'
        required
    />
    <Text
        placeholder='membershipType'
        property='membershipType'
        required
    />
    <DateTime
        placeholder='startDate'
        property='startDate'
        required
    />
    <DateTime
        placeholder='endDate'
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
        placeholder='state'
        property='membershipStatus'
        required
    />
</>

export default <DialogForm inputs={inputs} />
