export interface Voucher {
    name: string
    details: string
  }
export interface DataType {
    key: React.Key,
    id: {
      user_id: string,
      employee_id?: string,
      created_at: string,
      first_login_at?: string
    };
    status: {
      last_booking_at: string,
      last_active?: string,
      status: string
    }
    name: {
      name: string,
      gender: string,
      company?: string,
      department?: string,
      picture?: string,
    };
    contact: {
      mobile_number: string,
      email: string,
    }
    address: {
      home: string,
      work: string
    }
    trip?: number | null;
    voucher?: Voucher[]
  }

export const data: DataType[] = [
    {
      key: 1,
      id: {
        user_id: '457',
        employee_id: 'BAS-51243',
        created_at: '9 Jun 2022',
        first_login_at: '22 Nov 2022' 
      },
      status: {
        last_booking_at: '-',
        last_active: '-',
        status: 'Lead',
    },
      name: {
        name: 'Ruben Tornado',
        gender: 'Male',
        company: 'SKTrans',
        department: 'Processing',
        picture: '/teb_prof_1.png'
      },
      contact: {
        mobile_number: '+62 812 3546 7890',
        email: 'rubentornado@email.com'
      },
      address: {
        home: 'Master Pro Kecamatan Serpong, Kota Tangerang Selatan',
        work: 'Grand Indonesia Kecamatan  Menteng, Kota Jakarta Pusat'
      },
      trip: null,
      voucher: [],
    },
    {
        key: 2,
        id: {
          user_id: '457',
          employee_id: '',
          created_at: '9 Jun 2022',
          first_login_at: '' 
        },
        status: {
          last_booking_at: '2 May 2022',
          last_active: '1 day ago',
          status: 'Active',
      },
        name: {
          name: 'Kierra Calzoni',
          gender: 'Female',
          company: '',
          department: '',
          picture: '/teb_prof_2.png'
        },
        contact: {
          mobile_number: '+62 812 3546 7890',
          email: 'kierracalzoni@email.com'
        },
        address: {
          home: 'Master Pro Kecamatan Serpong, Kota Tangerang Selatan',
          work: 'Grand Indonesia Kecamatan  Menteng, Kota Jakarta Pusat'
        },
        trip: 32,
        voucher: [
          {
            name: 'Flexi',
            details: `
              Flexi Pass 5X • 5X
              Trips
              BSD <-> SCBD
              
              Flexi Pass 3X • 3X
              Trips
              BSD <-> SCBD`
          },
          {
            name: 'Bundle',
            details: `
              Kemerdekaan
              BSD <-> SCBD`
          }
        ],
      },
      {
        key: 3,
        id: {
          user_id: '457',
          employee_id: 'BAS-51243',
          created_at: '9 Jun 2022',
          first_login_at: '' 
        },
        status: {
          last_booking_at: '9 Jun 2022',
          last_active: '56 days ago',
          status: 'Recent',
      },
        name: {
          name: 'Kristianto',
          gender: 'Male',
          company: 'Toyota Tsusho',
          department: 'Chemicals',
          picture: '/teb_prof_3.png'
        },
        contact: {
          mobile_number: '+62 812 3546 7890',
          email: 'kristianto@email.com'
        },
        address: {
          home: 'Master Pro Kecamatan Serpong, Kota Tangerang Selatan',
          work: 'Grand Indonesia Kecamatan  Menteng, Kota Jakarta Pusat'
        },
        trip: 32,
        voucher: [],
      },
      {
        key: 4,
        id: {
          user_id: '457',
          employee_id: 'BAS-51243',
          created_at: '9 Jun 2022',
          first_login_at: '22 Nov 2022' 
        },
        status: {
          last_booking_at: '-',
          last_active: '125 days ago',
          status: 'Inactive',
      },
        name: {
          name: 'Waluyo Brahmono Paulo Margono',
          gender: 'Male',
          company: 'Toyota Tsusho',
          department: 'Processing',
          picture: '/teb_prof_4.png'
        },
        contact: {
          mobile_number: '+62 812 3546 7890',
          email: '-'
        },
        address: {
          home: 'Master Pro Kecamatan Serpong, Kota Tangerang Selatan',
          work: 'Grand Indonesia Kecamatan  Menteng, Kota Jakarta Pusat'
        },
        trip: 1,
        voucher: [],
      },
  ];