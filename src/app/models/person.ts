export interface Person {
  person_id?: string;
  names: string;
  surnames: string;
  email: string;
  phone: string;
  nick: string;
  typeIdentityId: string;
  typePersonId: string;
  generId: string;
  status?: string;

  createdFromUser: string;
  username: string;
  password: string;
  rolName: string;
}
