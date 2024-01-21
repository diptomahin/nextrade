import clsx from "clsx"
import {
    twMerge
} from "tailwind-merge"


const cn = (...inputs) => {
    return twMerge(clsx(inputs))
}

export default cn