<template>
  <div id="app">
		<v-app>
			<v-content>
				<v-container>
					<v-container>
						<h2>Add contacts</h2>
					</v-container>
					<v-container grid-list-md text-xs-center>
						<v-layout row wrap class="elevation-1 form">
							<v-flex xs6>
								<v-text-field label="Name" v-model="Name"></v-text-field>
							</v-flex>
							<v-flex xs6>
								<v-text-field label="Phone" v-model="Phone"></v-text-field>
							</v-flex>
                <v-flex xs6>
								<v-text-field label="Site" v-model="Site"></v-text-field>
							</v-flex>
							<v-flex xs6>
								<v-text-field label="Company" v-model="Company"></v-text-field>
							</v-flex>
							<v-flex xs6>
								<v-text-field label="e-mail" v-model="Mail"></v-text-field>
							</v-flex>
							<v-flex xs6>
								<v-flex>
									<v-menu ref="datePicker" :close-on-content-click="false" v-model="menu2" :nudge-right="40" :return-value.sync="hireDate" lazy transition="scale-transition" offset-y full-width min-width="290px">
										<v-text-field slot="activator" v-model="hireDate" label="Hire Date" prepend-icon="event" readonly></v-text-field>
										<v-date-picker v-model="hireDate" @input="$refs.datePicker.save(hireDate)"></v-date-picker>
									</v-menu>
								</v-flex>
							</v-flex>
							<v-btn color="primary" @click="saveClicked">
								<v-icon left dark>save</v-icon>
								Save
							</v-btn>
						</v-layout>
					</v-container>
					<v-container grid-list-md text-xs-center>
						<v-layout row wrap>
							<v-data-table :headers="headers" :items="testData" hide-actions class="elevation-1">
								<template slot="items" slot-scope="props">
									<td>{{ props.item.name.first}} {{ props.item.name.last}} </td>
									<td class="text-xs-right">{{ props.item.age }}</td>
									<td class="text-xs-right">{{ props.item.company }}</td>
									<td class="text-xs-right">{{ props.item.about }}</td>
									<td class="text-xs-right">{{ props.item.registered }}</td>
								</template>
							</v-data-table>
						</v-layout>
					</v-container>
				</v-container>
			</v-content>
		</v-app>
	</div>
</template>

<script>
export default {
  name: 'Settings',

  data() {
		return {
			Name: "",
      Phone: "",
      Site: "",
      Company: "",
			Mail: "",
			hireDate: "",
			headers: [
			
				{ text: 'Age', value: 'age' },
				{ text: 'Company', value: 'company' },
				{ text: 'About', value: 'about' },
				{ text: 'Date Registered', value: 'registered', sortable: false }
			],
	
		};
  },
  methods: {
		saveClicked() {
			let form = {
        Name: this.Name,
        Phone: this.Phone,
        Site: this.Site,
        Company: this.Company,
        Mail: this.Mail,
        age: this.age,
        hireDate: this.hireDate
			}
			
			alert(JSON.stringify(form, null, 2))
		}
  } }
</script>

<style scoped>

.form  {
	padding: 1rem;
}

body {
  text-align:center;
}
</style>