export const state = () => ({
  authUser: null,
  units: [
    {
      id: '1234',
      code: 'coit20211',
      name: 'Programming in C++',
      classes: [
        {
          id: '1',
          type: 'lecture',
          day: 'Friday',
          time: '10:00 - 13:00',
          location: 'MEL 01/5.01',
          staff: 'Azmat, Ullahbvnmkkbhgcfxd,',
          startdate: '13/01/19',
          enddate: '18/03/19'
        },
        {
          id: '2',
          type: 'tutorial',
          day: 'Saturday',
          time: '10:00 - 13:00',
          location: 'MEL 01/4.01',
          staff: 'Azmat, Ullah',
          startdate: '13/03/19',
          enddate: '18/06/19'
        },
        {
          id: '3',
          type: 'tutorial',
          day: 'workshop',
          time: '08:00 - 12:00',
          location: 'MEL 01/4.01',
          staff: 'Azmat, Ullah',
          startdate: '13/03/19',
          enddate: '18/06/19'
        }
      ]
    },
    {
      id: '123',
      code: 'coit20211',
      name: 'Programming in C++',
      classes: [
        {
          id: '1',
          type: 'lecture',
          day: 'Friday',
          time: '10:00 - 13:00',
          location: 'MEL 01/5.01',
          staff: 'Azmat, Ullahbvnmkkbhgcfxd,',
          startdate: '13/01/19',
          enddate: '18/03/19'
        },
        {
          id: '2',
          type: 'tutorial',
          day: 'Saturday',
          time: '10:00 - 13:00',
          location: 'MEL 01/4.01',
          staff: 'Azmat, Ullah',
          startdate: '13/03/19',
          enddate: '18/06/19'
        },
        {
          id: '3',
          type: 'tutorial',
          day: 'workshop',
          time: '08:00 - 12:00',
          location: 'MEL 01/4.01',
          staff: 'Azmat, Ullah',
          startdate: '13/03/19',
          enddate: '18/06/19'
        }
      ]
    }
  ]
})

export default state
