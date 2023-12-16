export interface DataType {
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
    voucher?: string
}

export const tableData: DataType[] = [
    {
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
            department: 'Processing'
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
        voucher: ''
    }
];