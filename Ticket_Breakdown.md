## Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function getShiftsByFacility is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function generateReport is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.


You've been asked to work on a ticket. It reads:

Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

# Ticket Breakdown Solution

1. Update Agents Table to include new Custom Id field.
2. Add feature for facilities to save/update Custom Id for Agents.
3. Update getShiftsByFacility function to return Custom Id as part of the Agents' metadata.
4. Update PDF generation feature to present the Custom Id in place of internal id.
5. Investigate all other places where the internal id is used, which may need replacement, to present to client

### 1. Update Agents Table to include new Custom Id field.

#### Description:

- Speak to client to determine default initial value ex. first letter of first name, followed by last name
- Create new varchar(50) custom_id field in Agents Table, with the initial value definition determined in step 1

#### Acceptance Criteria

- A new table column, custom_id, should exist in the agents table
- Conditional: depending on client's recommendation, an initial value may exist for each agent

#### Time Estimate

- 4-8 hours (depending on client's requirements)

### 2. Add feature for facilities to save/update Custom Id for Agents.

#### Description:

Front-End Forms and Validation

- Subtask 1: Create Agent
  - Front-End - Update Create Agent Form to capture the Custom Id.
  - Front-End - Update Create Agent form validation for Custom Id; required, acceptable characters...etc.
  - Front-End - Update Create Agent create request to include Custom Id.
  - Front-End - Add Unit tests for capturing and saving.
  - Back-End - post requests require custom_id and validate correctly.
  - Back-End - Add Unit tests for post request & response.
- Subtask 2: Front-End - Edit Agent
  - Front-End - Update Edit Agent Form to capture the Custom Id.
  - Front-End - Update Edit Agent form validation for Custom Id; required, acceptable characters...etc.
  - Front-End - Update Edit Agent update request to include Custom Id.
  - Front-End - Add Unit tests for capturing and saving.
  - Back-End - update requests require custom_id and validate correctly.
  - Back-End - Add Unit tests for update request & response.
- Subtask 3: Front-End - View Agent
  - Front-End - Update View Agent Form to show the Custom Id.
  - Front-End - Add Unit tests for displaying.
  - Back-End - get requests require custom_id and validate correctly.
  - Back-End - Add Unit tests for get request & response.

#### Acceptance Criteria

- Create Agent captures Custom Id and successfully validates and saves.
- Edit Agent captures Custom Id and successfully validates and saves.
- View Agent displays Custom Id.
- Successful unit tests are added with required coverage for front and back ends.

#### Time Estimate

- Subtask 1: 3 days
- Subtask 2: 2 day
- Subtask 3: 1 hours

### 3. Update getShiftsByFacility function to return Custom Id as part of the Agents' metadata.

#### Description:

- Back-End - getShiftsByFacility service response queries agent custom_id to include in the metadata.
- Back-End - Add Unit tests for request & response.
- Front-End - getShiftsByFacility displays returned Custom Id
- Front-End - Add Unit tests for displaying.

#### Acceptance Criteria

- Agent Metadata includes Custom Id and is displayed correctly.
- Successful unit tests are added with required coverage for front and back ends.

#### Time Estimate

- 2 Days

### 4. Update PDF generation feature to present the Custom Id in place of internal id.

#### Description:

- Front-End - update generateReport function to include Custom Id for agents in place of internal id on generated PDF Report.
- Front-End - Add Unit tests for generated pdfs to include the Custom Id as expected.

#### Acceptance Criteria

- New PDF reports should display agents' Custom Ids correctly

#### Time Estimate

- 4 hours

### 5. Spike: Investigate all other places where the internal id is used, which may need replacement, to present to client

#### Description:

- Product - list all places where the internal id is displayed.
- Present to findings to the client to discuss possible future refactoring.

#### Acceptance Criteria

- A comprehensive list is presented of all places where the internal id is displayed.

#### Time Estimate

- 4 hours
