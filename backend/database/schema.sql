create table users (
  id int auto_increment primary key,
  email varchar(100) unique not null,
  hashed_password text not null,
  profile enum('Structure', 'Parent', 'Employee') not null,
  confirmation_inscription boolean,
  confirmation_date_sent datetime,
  created_date datetime default current_timestamp,
  last_connection datetime,
  constraint unique_email unique (email)
);

create table parents (
  id int auto_increment primary key,
  user_id int unique,
  first_name varchar(100),
  last_name varchar(100),
  birth_name varchar(100),
  terms_accepted boolean,
  date_acceptance_terms datetime,
  marital_status enum('Single', 'Married', 'Divorced', 'Other'),
  address varchar(100),
  address_complements varchar(100),
  zip_code varchar(5),
  city varchar(100),
  phone_number varchar(15),
  email varchar(100),
  profession varchar(100)
);

create table child (
  id int auto_increment primary key,
  parent_id int,
  first_name varchar(100),
  last_name varchar(100),
  date_of_birth date,
  walker boolean,
  name_of_doctor varchar(100),
  allergies text,
  alimentation enum('All', 'Vegan', 'Vegetarian', 'Halal', 'Kosher')
);

create table structures (
  id int auto_increment primary key,
  user_id int unique,
  name varchar(100) not null,
  description text,
  address varchar(100),
  address_complements varchar(100),
  zip_code varchar(5),
  city varchar(100),
  phone_number varchar(15),
  email varchar(100),
  activities text,
  welcomes text,
  experiences text,
  prices decimal(10,2)
);

create table employees (
  id int auto_increment primary key,
  structure_id int,
  first_name varchar(100) not null,
  last_name varchar(100) not null,
  qualification varchar(100),
  max_children_capacity int
);

create table documents (
  id int auto_increment primary key,
  reservation_folder_id int,
  document_type_id int,
  added boolean,
  upload_date datetime,
  file_name varchar(260),
  storage_path varchar(500),
  type enum('certificate_insurance', 'certificate_vaccination', 'certificate_birth', 'certificate_aptitude', 'authorisation_care', 'proof_income', 'declaration_income', 'num_CAF', 'num_SS', 'proof_address', 'proof_professional_status', 'RIB', 'authorization_photo', 'authorisation_exit', 'family_booklet', 'divorce_decree'),
  origin enum('child_folder', 'parent_folder', 'reservation_folder', 'other')
);

create table reservation (
  id int auto_increment primary key,
  parent_id int,
  document_id int,
  child_id int,
  available_place_id int,
  status enum('in_progress', 'waiting', 'accepted', 'refused'),
  rejection_reason text,
  reservation_date_start date,
  reservation_date_end date,
  start_time time,
  end_time time,
  prices decimal(10,2),
  created_date datetime default current_timestamp
);

create table employees_disponibilities (
  id int auto_increment primary key,
  employee_id int,
  start_date date,
  end_date date,
  start_time time,
  end_time time,
  number_of_places int
);

create table employees_assignments (
  id int auto_increment primary key,
  reservation_id int,  
  employee_id int
);