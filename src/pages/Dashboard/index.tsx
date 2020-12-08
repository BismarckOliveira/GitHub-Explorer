import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Githul Explore" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositorio" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/68343542?s=460&u=83673968d8696382ff401dcdb68a213a8ba03d9b&v=4"
            alt="Bismarck Oliveira"
          />
          <div>
            <strong>Desafio/Rocketseat</strong>
            <p>Aplicação para auxiliar o processo de visitação de Orfanatos.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/68343542?s=460&u=83673968d8696382ff401dcdb68a213a8ba03d9b&v=4"
            alt="Bismarck Oliveira"
          />
          <div>
            <strong>Desafio/Rocketseat</strong>
            <p>Aplicação para auxiliar o processo de visitação de Orfanatos.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/68343542?s=460&u=83673968d8696382ff401dcdb68a213a8ba03d9b&v=4"
            alt="Bismarck Oliveira"
          />
          <div>
            <strong>Desafio/Rocketseat</strong>
            <p>Aplicação para auxiliar o processo de visitação de Orfanatos.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
