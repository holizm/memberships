import {
    DateTime,
    DialogForm,
    LongText,
    Select,
    Text,
} from 'form'

const inputs = <>
    <Text
        placeholder='membershipsNumber'
        property='number'
        required
    />
    <Text
        placeholder='membershipsApplicant'
        property='applicant'
        required
    />
    <Text
        placeholder='membershipsMembershipType'
        property='membershipType'
        required
    />
    <DateTime
        placeholder='membershipsApplicationDate'
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
        placeholder='membershipsStatus'
        property='membershipApplicationStatus'
        required
    />
    <LongText
        placeholder='membershipsNotes'
        property='notes'
    />
</>

export default <DialogForm inputs={inputs} />
