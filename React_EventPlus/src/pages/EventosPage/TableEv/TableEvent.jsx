import React from "react";
import editPen from "../../../assets/images/edit-pen.svg";
import trashDelete from "../../../assets/images/trash-delete.svg";
import { dateFormatDbToView } from '../../../Utils/stringFuntion';
import { Tooltip } from 'react-tooltip';
import "./TableEvent.css";

const TableEvent = ({dados, fnDelete = null, fnUpdate = null}) => {
  return (
    <table className="table-data">
      <thead className="table-data__head">
        <tr className="table-data__head-row">
          <th className="table-data__head-title table-data__head-title--big">
            Nome
          </th>
          <th className="table-data__head-title table-data__head-title--big">
            Descrição
          </th>
          <th className="table-data__head-title table-data__head-title--big">
            Tipo Evento
          </th>
          <th className="table-data__head-title table-data__head-title--big">
            Data
          </th>
          <th className="table-data__head-title table-data__head-title--little">
            Editar
          </th>
          <th className="table-data__head-title table-data__head-title--little">
            Deletar
          </th>
        </tr>
      </thead>

      <tbody>
        {dados.map((ev) => {

          return (
            <tr key={Math.random()} className="table-data__head-row">
              <td className="table-data__data table-data__data--big">
                {ev.nomeEvento}
              </td>

              <td className="table-data__data table-data__data--big"
                data-tooltip-id="descricao-evento"
                data-tooltip-content={ev.descricao}
                data-tooltip-place="top"
              >
                <Tooltip id="descricao-evento" className='custom-tootip'/>
                {ev.descricao.substr(0, 15)}
              </td>

              <td className="table-data__data table-data__data--big">
                {ev.tiposEvento.titulo}
              </td>

              <td className="table-data__data table-data__data--big">
                {dateFormatDbToView(ev.dataEvento)}
              </td>

              <td className="table-data__data table-data__data--little">
                <img
                  className="table-data__icon"
                  src={editPen}
                  alt="editar"
                  onClick={() => {
                    fnUpdate(ev.idEvento);
                  }}
                />
              </td>
              <td className="table-data__data table-data__data--little">
                <img
                  className="table-data__icon"
                  src={trashDelete}
                  alt="deletar"
                  onClick={() => {
                    fnDelete(ev.idEvento);
                  }}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableEvent;
