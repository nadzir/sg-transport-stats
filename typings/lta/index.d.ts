import { number } from "prop-types";

declare module "lta" {

    export interface ltaBusStop {
        BusStopCode: string,
        Description: string,
        Latitude: number,
        Longitude: number,
        RoadName: string
    }

    interface ltaPassengerVolume {
        YEAR_MONTH: string,
        DAY_TYPE: string,
        TIME_PER_HOUR: string,
        PT_TYPE: string,
        ORIGIN_PT_CODE: string,
        DESTINATION_PT_CODE: string,
        TOTAL_TRIPS: number
    }

}
