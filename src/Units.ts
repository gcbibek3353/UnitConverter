export type unitsTypes = {
    category : string,
    default : string,
    units : {
        [unitName : string] : string;
    };
};

export const Units: unitsTypes[] = [
    {
        category : 'length',
        default : 'meter',
        units : {
            'millimeter' : '1000',
            'centimeter' : '100',
            'meter' : '1',
            'kilometer' : '0.001'
        }
    },
    {
        category : 'Area',
        default : 'squareMeter',
        units : {
            'squaremillimeter' : '1000000',
            'squareCentimeter' : '10000',
            'squareMeter' : '1',
            'squareKilometer' : '0.000001'
        }
    },
    {
        category : 'weight',
        default : 'kilogram',
        units : {
            'milligram' : '1000000',
            'gram' : '1000',
            'ton' : '0.001',
            'pound' : '2.2046',
        }
    },
    {
        category : 'time',
        default : 'second',
        units : {
            'picosecond' : '1000000000000',
            'nanosecond' : '1000000000',
            'microsecond' : '1000000',
            'millisecond' : '1000',
            'second' : '1',
            'minute' : '0.0166666667',
            'hour' : '0.0002777778',
            'day' : '0.0000115741',
            'week' : '0.0000016534',
        }
    },
]
 