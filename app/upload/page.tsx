import ImageView from "./components/imageView";
import TableView from "./components/tableview";
import UploadView from "./components/uploadView";

export default function Upload() {
  return (
    <div>
      <UploadView />
      <div className="flex justify-evenly mt-4">
        <ImageView />
        <TableView />
      </div>
    </div>
  );
}
