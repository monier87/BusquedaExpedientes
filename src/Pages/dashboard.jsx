import { useState } from "react";
import { Input, Button, Space, Typography, Select } from "antd";

const { Search } = Input;
const { Option } = Select;

function SearchForm() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchCategory, setSearchCategory] = useState("all");
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSearch = (value) => {
    setSearchQuery(value);
    // Aquí puedes realizar la búsqueda con la consulta 'value' y aplicar los filtros correspondientes
    // y mostrar los resultados en la interfaz
    console.log("Realizar búsqueda con la consulta:", value);
    console.log("Categoría de búsqueda:", searchCategory);
  };

  const handleCategoryChange = (value) => {
    setSearchCategory(value);
  };

  const handleKeywordSearch = (value) => {
    setSearchKeyword(value);
    // Aquí puedes realizar la búsqueda de palabras clave dentro de los documentos PDF relacionados a los expedientes
    console.log("Realizar búsqueda de palabras clave:", value);
  };

  return (
    <Space direction="vertical">
      <Typography.Title level={4}>Búsqueda de Expedientes</Typography.Title>
      <Space>
        <Search
          placeholder="Ingrese su consulta de búsqueda"
          enterButton="Buscar"
          onSearch={handleSearch}
        />
        <Select
          defaultValue="all"
          style={{ width: 180 }}
          onChange={handleCategoryChange}
        >
          <Option value="all">Todas las categorías</Option>
          <Option value="tipo">Tipo de Expediente</Option>
          <Option value="numero">Número de Expediente</Option>
          <Option value="estado">Estado de Expediente</Option>
          {/* Agrega más opciones de categorías según tus necesidades */}
        </Select>
      </Space>
      {/* Agrega controles adicionales según las categorías seleccionadas */}
      {searchCategory === "tipo" && (
        <Select style={{ width: 180 }} placeholder="Seleccione el tipo de expediente">
          {/* Agrega opciones de tipos de expediente */}
        </Select>
      )}
      {searchCategory === "numero" && (
        <Input style={{ width: 180 }} placeholder="Ingrese el número de expediente" />
      )}
      {searchCategory === "estado" && (
        <Select style={{ width: 180 }} placeholder="Seleccione el estado de expediente">
          {/* Agrega opciones de estados de expediente */}
        </Select>
      )}

      <Typography.Title level={4}>Búsqueda de Palabras Clave en Documentos PDF</Typography.Title>
      <Space>
        <Search
          placeholder="Ingrese una palabra clave"
          enterButton="Buscar"
          onSearch={handleKeywordSearch}
        />
      </Space>
    </Space>
  );
}

export default SearchForm;
