import { useState, useEffect } from 'react';
import axios from 'axios';
import { Department } from '@/interfaces/Department';

const useFetchDepartments = (orgID: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [departments, setDepartments] = useState<Department[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchDepartments = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `http://localhost:4001/api/department/${orgID}`
      );
      setDepartments(response.data.data.departments.data);
    } catch (error) {
      setError('Erro ao fazer a requisição. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDepartments();
  }, []);

  return { loading, departments, error, fetchDepartments };
};

export default useFetchDepartments;
