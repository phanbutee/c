<template>
<v-app id="mm">
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
  <h1>ประเมินความพึงพอใจของลูกค้าหลังใช้บริการร้านกาเเฟ</h1>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="namein"
            :counter="10"
            label="Name"
            required
          />
          </v-col>
          <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="Lastname"
            :counter="10"
            label="Lastname"
            required
          />
          </v-col>
          <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="Age"
            :counter="10"
            label="Age"
            required
          />
          </v-col>
          <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="Email"
            :counter="10"
            label="Email"
            required
          />
          </v-col>
          <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="Address"
            :counter="10"
            label="Address"
            required
          />
          </v-col>
          <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="PhoneNumber"
            :counter="10"
            label="PhoneNumber"
            required
          />
        </v-col>
    
      
    <v-container fluid>
    <p>1.ความสอาดของร้านค้า</p>
    <v-radio-group
      v-model="radios1"
      :mandatory="false"
       row
    >
      <v-radio
        label="5.มากที่สุด"
        value="5"
      ></v-radio>
      <v-radio
        label="4.มาก"
        value="4"
      ></v-radio>
      <v-radio
        label="3.ปานกลาง"
        value="3"
      ></v-radio>
      <v-radio
        label="2.นอย"
        value="2"
      ></v-radio>
      <v-radio
        label="1.น้อยที่สุด"
        value="1"
      ></v-radio>
      </v-radio-group>
    
  </v-container>

  <v-container fluid>
    <p>2.การให้บริการอของพนักงาน</p>
    <v-radio-group
      v-model="radios2"
      :mandatory="false"
      row
    >
     <v-radio
        label="5.มากที่สุด"
        value="5"
      ></v-radio>
      <v-radio
        label="4.มาก"
        value="4"
      ></v-radio>
      <v-radio
        label="3.ปานกลาง"
        value="3"
      ></v-radio>
      <v-radio
        label="2.นอย"
        value="2"
      ></v-radio>
      <v-radio
        label="1.น้อยที่สุด"
        value="1"
      ></v-radio>
    </v-radio-group>
  </v-container>

  <v-container fluid>
    <p>3.สิ่งอำนวยความสะดวก</p>
    <v-radio-group
      v-model="radios3"
      :mandatory="false"
      row
    >
      <v-radio
        label="5.มากที่สุด"
        value="5"
      ></v-radio>
      <v-radio
        label="4.มาก"
        value="4"
      ></v-radio>
      <v-radio
        label="3.ปานกลาง"
        value="3"
      ></v-radio>
      <v-radio
        label="2.นอย"
        value="2"
      ></v-radio>
      <v-radio
        label="1.น้อยที่สุด"
        value="1"
      ></v-radio>
    </v-radio-group>
  </v-container>

  <v-container fluid>
    <p>4.วิธีการชำระเงิน</p>
    <v-radio-group
      v-model="radios4"
      :mandatory="false"
      row
    >
      <v-radio
        label="5.มากที่สุด"
        value="5"
      ></v-radio>
      <v-radio
        label="4.มาก"
        value="4"
      ></v-radio>
      <v-radio
        label="3.ปานกลาง"
        value="3"
      ></v-radio>
      <v-radio
        label="2.นอย"
        value="2"
      ></v-radio>
      <v-radio
        label="1.น้อยที่สุด"
        value="1"
      ></v-radio>
    </v-radio-group>
  </v-container>

  <v-container fluid>
    <p>5.ความพึงพอใจเมื่อได้รับสินค้า</p>
    <v-radio-group
      v-model="radios5"
      :mandatory="false"
      row
    >
      <v-radio
        label="5.มากที่สุด"
        value="5"
      ></v-radio>
      <v-radio
        label="4.มาก"
        value="4"
      ></v-radio>
      <v-radio
        label="3.ปานกลาง"
        value="3"
      ></v-radio>
      <v-radio
        label="2.นอย"
        value="2"
      ></v-radio>
      <v-radio
        label="1.น้อยที่สุด"
        value="1"
      ></v-radio>
  
    </v-radio-group>
  </v-container>


        
      </v-row>
    </v-container>

  <div class="text-center">
    <v-btn
      rounded
      color="black"
      dark
      @click="validate"
    >
      submit
    </v-btn>
  </div>


    
  </v-form>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
export default {

  data () {
    return {
      namein: '',
      Lastname:'',
      Age:'',
      Email:'',
      Address:'',
      PhoneNumber:'',
      radios1: '',
      radios2: '',
      radios3: '',
      radios4: '',
      radios5: '',
      
    }
  },
  computed: {
    ...mapGetters([
      'data'
    ])
  },
  methods: {
    validate () {
      const name = this.namein
      const Lastname = this.Lastname
      const Age = this.Age
      const Email = this.Email
      const Address = this.Address
      const PhoneNumber = this.PhoneNumber
      const radios1 = this.radios1
      const radios2 = this.radios2
      const radios3 = this.radios3
      const radios4 = this.radios4
      const radios5 = this.radios5
      this.$store.commit('input', {name,Lastname,Age,Email,Address,PhoneNumber,radios1,radios2,radios3,radios4,radios5})
    }
  }
}
</script>

<style scoped>
#mm {
  background-color: #5D4037;
  background-size: cover;
  
}
</style>
