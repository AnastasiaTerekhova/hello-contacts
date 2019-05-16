<template>
  <div id="app">
    <v-app class="indigo">
      <v-content>
        <v-container>
          <v-layout row>
			<v-flex xs6>
            <v-form ref="form" class="white ma-5">
                <v-text-field class="pa-3" label="Name" v-model="Contacts"></v-text-field>
                <v-text-field class="pa-3" label="Phone" v-model="Phone"></v-text-field>
                <v-text-field class="pa-3" label="Site" v-model="Site"></v-text-field>
                <v-text-field class="pa-3" label="Company" v-model="Company"></v-text-field>
                <v-text-field class="pa-3" label="E-mail" v-model="Mail"></v-text-field>
                <v-text-field class="pa-3" label="Age" v-model="Age"></v-text-field>
              <!-- <v-flex xs6>
								<v-flex>
									<v-menu ref="datePicker" :close-on-content-click="false" v-model="menu2" :nudge-right="40" :return-value.sync="hireDate" lazy transition="scale-transition" offset-y full-width min-width="290px">
										<v-text-field slot="activator" v-model="hireDate" label="Hire Date" prepend-icon="event" readonly></v-text-field>
										<v-date-picker v-model="hireDate" @input="$refs.datePicker.save(hireDate)"></v-date-picker>
									</v-menu>
								</v-flex>
							</v-flex> -->
              <v-btn v-if="edit!=true" color="primary" @click="saveContacts(Contacts,Phone,Site,Company,Mail,Age,$event)">
                Save
              </v-btn>
              <v-btn v-if="edit==true" color="success" @click="updateContacts($event)">
                Update
              </v-btn>
              <v-btn v-if="edit==true" color="seconndary" @click="cancelContacts($event)">
                Cancel
              </v-btn>
            </v-form>
			</v-flex>

            <v-flex xs6 v-if="edit==false">
              <v-flex xs12 v-for="(Contacts,index) in Contact" :key="Contacts.name">
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">{{Contacts.Contacts}}</h3>
                    <div>{{Contacts.Phone}}</div>
                    <div>{{Contacts.Site}}</div>
                    <div>{{Contacts.Company}}</div>
                    <div>{{Contacts.Age}}</div>
                  </div>
                </v-card-title>

                <v-card-actions v-if="edit==false">
                  <v-btn color="warning" @click="editContacts(Contact,index)">Edit</v-btn>
                  <v-btn color="error" @click="deleteContacts(index)">Delete</v-btn>
                </v-card-actions>

                <v-card-actions v-if="edit!==false">
					<v-btn disabled color="warning">Edit</v-btn>
					<v-btn disabled color="error">Delete</v-btn>
                </v-card-actions>

              </v-flex>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12>
              <v-footer dark>
                <v-card class="flex" flat tile>
                  <v-card-actions class="orange justify-center">
                    <strong>Contacts</strong>
                  </v-card-actions>
                </v-card>
              </v-footer>
            </v-flex>
          </v-layout>
 
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "Settings",

  data() {
    return {
      Contacts: '',
      Phone: '',
      Site: '',
      Company: '',
      Mail: '',
      Age: '',
      edit: false,
      delete: false,
	cansel: false,
      id2: 0,
      ind: 0,
      Contact: []
    };
  },
  methods: {
    saveContacts:function(t,d,event) {
      event.preventDefault();
      this.Contact.push({
        Contacts:this.Contacts,
        Phone:this.Phone,
        Site:this.Site,
        Company:this.Company,
        Mail:this.Mail,
        Age:this.Age
      });
      localStorage.setItem("Contact",JSON.stringify(this.Contact));
      this.Contacts = '';
      this.Phone = '';
      this.Site = '';
      this.Company = '';
      this.Mail = '';
      this.Age = '';
    },
    editContacts:function(t,i) {
      this.edit=!this.edit;
      this.Contacts=t.Contacts;
      this.Phone=t.Phone;
      this.Site=t.Site;
      this.Company=t.Company;
      this.Mail=t.Mail;
      this.Age=t.Age;
      this.ing=i;
    },
    updateContacts:function(event) {
      event.preventDefault();
      this.edit=!this.edit;
      let Contactsdb={
        Contacts:this.Contact,
        Phone:this.Phone,
        Site:this.Site,
        Company:this.Company,
        Mail:this.Mail,
        Age:this.Age
      }
      this.Contact[this.ind] = Contactsdb;
      localStorage.setItem("Contact", JSON.stringify(this.Contact));
      let ContactsDB = JSON.parse(localStorage.getItem("Contact"));
      this.Contact = ContactsDB;
      this.Contacts = '';
      this.Phone = '';
      this.Site = '';
      this.Company = '';
      this.Mail = '';
      this.Age = '';
    },
    cancelContact:function(event) {
      event.preventDefault();
      this.Contacts = '';
      this.Phone = '';
      this.Site = '';
      this.Company = '';
      this.Mail = '';
      this.Age = '';
      this.edit =!this.editContacts;
    },
    deleteContacts:function(i) {
      this.Contact.splise(i,1);
      localStorage.setItem('Contact',JSON.stringify(this.Contact));
    }
  },
  created:function() {
    let ContactsDB = JSON.parse(localStorage.getItem('Contact'));
    if (ContactsDB === null) {
      this.Contact = [];
    } else {
      this.Contact=ContactsDB;
    }
  }
};
</script>

<style scoped>
.form {
  padding: 1rem;
}

body {
  text-align: center;
}
</style>