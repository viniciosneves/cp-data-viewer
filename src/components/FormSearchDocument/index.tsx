import React, { useRef } from 'react';
import Label from '@/components/Label';
import Input from '@/components/Input';
import Select from '@/components/Select';

const FormSearchDocument: React.FC = () => {


    return (
        <form className="bg-white p-6 my-4 rounded shadow-md">

            <div className='my-4'>
                <Label htmlFor="type">Type</Label>
                <Select id="type" name='type'>
                    <option value="">All Types</option>
                    <option value="general">General</option>
                    <option value="breastcancer">Breast Cancer</option>
                    <option value="prostate">Prostate</option>
                </Select>
            </div>

            <div className='my-4'>
                <Label htmlFor="fulltext">Fulltext Search</Label>
                <Input
                    id="fulltext"
                    placeholder="Search in documents"
                    name='q'
                />
            </div>

            <div className="flex justify-end">
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Search
                </button>
            </div>
        </form>
    );
};

export default FormSearchDocument;