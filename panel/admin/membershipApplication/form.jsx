import {
    DateTime,
    DialogForm,
    LongText,
    Select,
    Text,
} from 'form'

const inputs = <>
    <Text
        placeholder='number'
        property='number'
        required
    />
    <Text
        placeholder='applicant'
        property='applicant'
        required
    />
    <Text
        placeholder='membershipType'
        property='membershipType'
        required
    />
    <DateTime
        placeholder='applicationDate'
        property='applicationDate'
        required
    />
    <Select
        options={[
            'submitted',
            'underReview',
            'approved',
            'rejected',
            'withdrawn',
        ]}
        placeholder='state'
        property='membershipApplicationStatus'
        required
    />
    <LongText
        placeholder='description'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
