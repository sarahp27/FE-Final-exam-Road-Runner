import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';


describe('Navbar', () => { 

    test('check the source is available in logo image', () => {
        render(<Navbar/>);
        const  logo = screen.getByRole('img');
        expect(logo).toHaveAttribute('src')
    })

    test('check the alternative of logo is available in logo image', () => {
        render(<Navbar/>);
        const  logo = screen.getByRole('img');
        expect(logo).toHaveAttribute('alt')
    })

    test('renders the logo', () => {
        render(<Navbar/>);
        const  logo = screen.getByRole('img');
        expect(logo).toBeInTheDocument();
    })


 })
