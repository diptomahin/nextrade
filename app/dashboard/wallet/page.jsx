"use client"

import Container from "@/components/library/Container";

const Wallet = () => {
    return (
        <Container>
            <div>
                <div>
                    <h1 className='text-2xl font-bold'>Wallet</h1>
                </div>
                <div>
                    <h1 className='text-2xl font-bold'>Transaction History</h1>
                </div>
            </div>
            <div>
                <h1 className='text-2xl font-bold'>Select Currency & Payment</h1>
            </div>
        </Container>
    );
};

export default Wallet;