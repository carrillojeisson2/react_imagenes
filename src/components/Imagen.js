import React from 'react';

const Imagen = ({ imagen }) => {

    // extraer llas variables
    const { largeImageURL, likes, previewURL, tags, views } = imagen;
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card text-center">
                <img src={previewURL} alt={tags} className="card-img-top" />

                <div className="card-body">
                    <div className="card-text">{likes} Me Gusta</div>
                    <div className="card-text">{views} Vistas</div>

                </div>

                <div className="card-flooter">
                    <a
                        href={largeImageURL}
                        target="_blanck"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-blook mb-3"
                    >Ver Imagen</a>
                </div>
            </div>
        </div>
    );
}

export default Imagen;