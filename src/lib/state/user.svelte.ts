class UserData {
	id: number = $state(0);
	firstName: string = $state('');
	lastName: string = $state('');

	loadingUser: boolean = $state(true);

	updateUserData(data: { id: number; firstName: string; lastName: string }) {
		this.id = data.id;
		this.firstName = data.firstName;
		this.lastName = data.lastName;
		this.loadingUser = false;
	}
}

export const userData = new UserData();
