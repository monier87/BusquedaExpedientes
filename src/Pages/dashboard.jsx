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
          <Option value="nombre">Nombre del documento</Option>
          <Option value="seccion">Código de sección emisora</Option>
          <Option value="tipo">Tipo de documento</Option>
          <Option value="numRegistroEntrada">Número de registro entrada</Option>
          <Option value="numRegistroSalida">Número de registro salida</Option>
          <Option value="anio">Año</Option>
          <Option value="expediente">Número de expediente</Option>
          {/* Agrega más opciones de categorías según tus necesidades */}
        </Select>
      </Space>
      {/* Agrega controles adicionales según las categorías seleccionadas */}
      {searchCategory === "nombre" && (
        <Input style={{ width: 300 }} placeholder="Ingrese el nombre del documento" />
      )}
      {searchCategory === "seccion" && (
        <Input style={{ width: 180 }} placeholder="Ingrese el código de sección emisora" />
      )}
      {searchCategory === "tipo" && (
        <Input style={{ width: 180 }} placeholder="Ingrese el tipo de documento" />
      )}
      {searchCategory === "numRegistroEntrada" && (
        <Input style={{ width: 180 }} placeholder="Ingrese el número de registro entrada" />
      )}
      {searchCategory === "numRegistroSalida" && (
        <Input style={{ width: 180 }} placeholder="Ingrese el número de registro salida" />
      )}
      {searchCategory === "anio" && (
        <Input style={{ width: 180 }} placeholder="Ingrese el año" />
      )}
      {searchCategory === "expediente" && (
        <Input style={{ width: 180 }} placeholder="Ingrese el número de expediente" />
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
