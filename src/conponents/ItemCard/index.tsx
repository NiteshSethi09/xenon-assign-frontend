import { Card, Button } from "react-bootstrap";
import axiosInstance from "../../utils/AxiosInstance";

export interface cardProps {
  description: string;
  imageUrl: string;
  price: number;
  title: string;
  _id: string;
}

function ItemCard({ description, imageUrl, price, title, _id }: cardProps) {
  const splitDescription = description.split(" ");
  if (splitDescription.length > 25) {
    description = splitDescription.slice(0, 25).join(" ") + " ...";
  } else {
    description = splitDescription.join(" ");
  }

  const handleDelete = (id: string) => async () => {
    const result = await axiosInstance.delete("/product/delete-by-id", {
      data: {
        id,
        autheticated: localStorage.getItem("user_credentials") || false,
      },
    });
    console.log(id);

    console.log(result);
    if (result.data.error === true) {
      alert(result.data.message);
    } else {
      alert(result.data.message);
      (window.location as any) = "/";
    }
  };

  return (
    <Card style={{ marginBottom: "10px" }}>
      <Card.Img
        style={{ height: "200px" }}
        variant="top"
        src={imageUrl}
        alt="alternative text"
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>RS. {price}</Card.Text>
      </Card.Body>
      <Card.Body>
        <Button variant="danger" onClick={handleDelete(_id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ItemCard;
