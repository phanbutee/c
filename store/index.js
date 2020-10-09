export const state = () => ({
  data: [],
  headers: [
    {
      text: 'Name',
      align: 'start',
      sortable: false,
      value: 'name'
    },
    { text: 'Lastname', value: 'Lastname' },
    { text: 'Age', value: 'Age' },
    { text: 'Email', value: 'Email' },
    { text: 'Address', value: 'Address' },
    { text: 'PhoneNumber', value: 'PhoneNumber' },
    { text: '1.ความสอาดของร้านค้า', value: 'radios1' },
    { text: '2.การให้บริการอของพนักงาน', value: 'radios2' },
    { text: '3.สิ่งอำนวยความสะดวก', value: 'radios3' },
    { text: '4.วิธีการชำระเงิน', value: 'radios4' },
    { text: '5.ความพึงพอใจเมื่อได้รับสินค้า', value: 'radios5' },
    
  ]
})
export const mutations = {
  input (state, { name,Lastname,Age,Email,Address,PhoneNumber,radios1,radios2,radios3,radios4,radios5 }) {
    state.data.push({ name,Lastname,Age,Email,Address,PhoneNumber,radios1,radios2,radios3,radios4,radios5 })
  }
}
export const getters = {
  data (state) {
    return state.data
  }
}
